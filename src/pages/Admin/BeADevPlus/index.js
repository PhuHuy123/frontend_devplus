import PageTitle from "@app/components/Admin/PageTitle";
import Show from "@app/components/Admin/BeADevPlus";
import "@app/style/Crud.scss";

const ShowBeADevPlus = () => {
  return (
    <div className="page-content">
      <PageTitle />
      <Show />
    </div>
  );
};
export default ShowBeADevPlus;
