import React from "react";
import Applicant from "./components/applicant";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="app">
      <Detail
        subtitle="강용수 사장님"
        salary={2000000}
        text="OO아파트 경비원 구합니다"
        job_number={1}
        content="asdfasdfasdfasdfasfdasfasdfasfsafsafadsfaesfadsfsadfadsfasfsafasfasdfaasdfasdfasdfasdfasfdasfasdfasfsafsafadsfaesfadsfsadfadsfasfsafasfasdfaasdfasdfasdfasdfasfdasfasdfasfsafsafadsfaesfadsfsadfadsfasfsafasfasdfaasdfasdfasdfasdfasfdasfasdfasfsafsafadsfaesfadsfsadfadsfasfsafasfasdfaasdfasdfasdfasdfasfdasfasdfasfsafsafadsfaesfadsfsadfadsfasfsafasfasdfa"
        applicants={3}
        area="서울"
      />
    </div>
  );
}

export default App;
