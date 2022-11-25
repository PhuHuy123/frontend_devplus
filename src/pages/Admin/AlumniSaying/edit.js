import PageTitle from "@app/components/Admin/PageTitle";
import Edit from "@app/components/Admin/AlumniSaying/edit";
import '@app/style/Crud.scss';

const EditAlumniSaying = () => {
  return (
    <div className="page-content">
      <PageTitle />
      <Edit />
    </div>
  );
};
export default EditAlumniSaying;
