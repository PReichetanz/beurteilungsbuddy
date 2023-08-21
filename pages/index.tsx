import Form from "../components/Form/Form";
import Layout from "../components/Layout";

export default function HomePage({
  studentName,
  gender,
  isSummaryChosen,
  selectedEvaluations,
  handleStudentNameChange,
  handleGenderChange,
  handleRatingChange,
  handleEvaluationChange,
  handleSubmit,
  handleReset,
}): JSX.Element {
  return (
    <Layout>
      <Form
        studentName={studentName}
        gender={gender}
        isSummaryChosen={isSummaryChosen}
        selectedEvaluations={selectedEvaluations}
        handleStudentNameChange={handleStudentNameChange}
        handleGenderChange={handleGenderChange}
        handleRatingChange={handleRatingChange}
        handleEvaluationChange={handleEvaluationChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </Layout>
  );
}
