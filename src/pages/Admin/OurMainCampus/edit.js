import PageTitle from "@app/components/Admin/PageTitle";
import Edit from "@app/components/Admin/OurMainCampus/edit";
import '@app/style/Crud.scss';

const EditOurManCampus = () => {
    return (
      <div className="page-content">
        <PageTitle />
        <Edit />
      </div>
    );
}
export default EditOurManCampus;