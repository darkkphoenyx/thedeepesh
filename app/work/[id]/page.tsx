import { WorkView } from "@/components/views/Work.view";
import { WorkInterface } from "@/interfaces/work.interface";

const page = async ({ params }: WorkInterface) => {
  const { id } = await params;
  return <WorkView id={id} />;
};

export default page;
