import React from "react";
import { SchoolServiceConsumer } from "../school-service-context";

const withSchoolService = () => (Wrapped) => (props) => (
    <SchoolServiceConsumer>
        {
            (schoolService) => (
                <Wrapped {...props} schoolService={schoolService} />
            )
        }
    </SchoolServiceConsumer>
);

export default withSchoolService;
