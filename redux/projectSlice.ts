import { Project } from "@/interfaces/projectCrad.interface";
import projectAPI from "@/lib/appwrite/APIs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  loading: boolean;
}

const initialState: ProjectState = {
  projects: [],
  selectedProject: null,
  loading: false,
};

const mapProject = (doc: any): Project => ({
  $id: doc.$id,
  name: doc.name,
  github: doc.github,
  image: doc.image,
  details: doc.details,
  deployLink: doc.deployLink,
  techStack: doc.techStack,
  type: doc.type,
  domain: doc.domain,
  show: doc.show,
  header: doc.header,
  role: doc.role,
  platform: doc.platform,
  year: doc.year,
});

export const fetchProjects = createAsyncThunk<Project[], string>(
  "project/fetchProjects",
  async (type: string) => {
    const response = await projectAPI.getProjectDetails(type);
    return response.documents.map(mapProject);
  },
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedProject } = projectSlice.actions;
export default projectSlice.reducer;
