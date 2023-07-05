import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
    return (
        // minsize zero to 100 percent shrink
        <Split className="split" minSize={0}>
            <ProblemDescription />
            <div className="bg-dark-fill-2 min-h-screen">
                <Playground />
            </div>
        </Split>
    );
};
export default Workspace;
