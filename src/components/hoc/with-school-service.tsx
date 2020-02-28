import React from "react";
import { SchoolServiceConsumer } from "../school-service-context";
import { SchoolService } from "../../types";

const withSchoolService = () => (Wrapped: React.FC<any>) => (props: any): JSX.Element => (
    <SchoolServiceConsumer>
        {
            (schoolService: React.ConsumerProps<SchoolService>) => (
                <Wrapped {...props} schoolService={schoolService} />
            )
        }
    </SchoolServiceConsumer>
);

export default withSchoolService;
