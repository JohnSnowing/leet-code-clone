import React from "react";
import Split from "react-split";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";

type PlaygroundProps = {};

const Playground: React.FC<PlaygroundProps> = () => {
    return (
        <div className="flex flex-col bg-dark-layer-1 h-full relative overflow-x-hidden">
            <PreferenceNav />
            <Split
                className="h-[calc(100vh-94px)]"
                direction="vertical"
                sizes={[60, 40]}
                minSize={60}
            >
                <div className="w-full overflow-auto">
                    <CodeMirror
                        theme={vscodeDark}
                        extensions={[javascript()]}
                    />
                </div>
                <div className="w-full px-5 overflow-auto">
                    <div className="flex h-10 items-center space-x-6">
                        <div className="relative flex h-full flex-col justify-center cursor-pointer">
                            <div className="text-sm font-medium leading-5 text-white">
                                Test cases
                            </div>
                            <hr className="absolute bottom-0 h-0.5 w-full border-none rounded-full bg-white" />
                        </div>
                    </div>
                    <div className="flex"></div>
                    <div className="font-semibold my-4">
                        <p className="text-sm font-medium mt-4 text-white">
                            Input:
                        </p>
                        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                            {/* {problem.examples[activeTestCaseId].inputText} */}
                        </div>
                        <p className="text-sm font-medium mt-4 text-white">
                            Output:
                        </p>
                        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                            {/* {problem.examples[activeTestCaseId].outputText} */}
                        </div>
                    </div>
                </div>
            </Split>
            <EditorFooter />
        </div>
    );
};
export default Playground;
