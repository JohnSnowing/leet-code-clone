import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import React from "react";

type ProblemPageProps = {
    problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
    const hasMounted = useHasMounted();
    if (!hasMounted) return null;
    return (
        <div>
            <Topbar problemPage />
            <Workspace problem={problem} />
        </div>
    );
};
export default ProblemPage;

//fetch local data

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
    const { pid } = params;
    const problem = problems[pid];

    if (!problem) {
        return {
            notFound: true,
        };
    }
    problem.handlerFunction = problem.handlerFunction.toString();
    //convert handlerfunction key to string because your cannot pass a function
    return {
        props: {
            problem,
        },
    };
}
