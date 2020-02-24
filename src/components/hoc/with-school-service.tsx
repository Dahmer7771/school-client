import React from "react";
import { SchoolServiceConsumer } from "../school-service-context";

const withSchoolService = () => (Wrapped: React.FC<any>) => (props: any): JSX.Element => (
    <SchoolServiceConsumer>
        {
            (schoolService: React.ConsumerProps<any>) => (
                <Wrapped {...props} schoolService={schoolService} />
            )
        }
    </SchoolServiceConsumer>
);

export default withSchoolService;
