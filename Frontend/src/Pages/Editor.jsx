import React, { useEffect, useState } from "react";
import EditorNavbar from "../Components/EditorNavbar/EditorNavbar";
import "../CSS/Editor.css";
import EditorReact from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

function Editor() {
    const [isLightMode, setIsLightMode] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [tab, setTab] = useState("html");

    const [htmlCode, setHtmlCode] = useState("<h1>My First Project</h1>");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJsCode] = useState("// Comment");

    const run = () => {
        const iframe = document.getElementById("output");
        if (iframe) {
            const html = htmlCode;
            const css = `<style>${cssCode}</style>`;
            const js = `<script>${jsCode}<\/script>`;
            iframe.srcdoc = `${html}${css}${js}`;
        }
    };

    useEffect(() => {
        run();
    }, [htmlCode, cssCode, jsCode]);

    const toggleTheme = () => {
        setIsLightMode((prev) => !prev);
    };

    return (
        <div>
            <EditorNavbar isLightMode={isLightMode} />
            <div className={`editor ${isLightMode ? "light-mode" : "dark-mode"}`}>
                <div className={`left ${isExpanded ? "widthfull" : "widthhalf"}`}>
                    <div className={`editor-navbar ${isLightMode ? "light-navbar" : "dark-navbar"}`}>
                        <div>
                            <div onClick={() => setTab("html")}>HTML</div>
                            <div onClick={() => setTab("css")}>CSS</div>
                            <div onClick={() => setTab("js")}>JavaScript</div>
                        </div>
                        <div className="editor-icon">
                            <i onClick={toggleTheme}>
                                <MdLightMode />
                            </i>
                            <i onClick={() => setIsExpanded((prev) => !prev)}>
                                <AiOutlineExpandAlt />
                            </i>
                        </div>
                    </div>

                    {tab === "html" && (
                        <EditorReact
                            onChange={(e) => setHtmlCode(e || "")}
                            height="80vh"
                            defaultLanguage="html"
                            value={htmlCode}
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                        />
                    )}
                    {tab === "css" && (
                        <EditorReact
                            onChange={(e) => setCssCode(e || "")}
                            height="80vh"
                            defaultLanguage="css"
                            value={cssCode}
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                        />
                    )}
                    {tab === "js" && (
                        <EditorReact
                            onChange={(e) => setJsCode(e || "")}
                            height="80vh"
                            defaultLanguage="javascript"
                            value={jsCode}
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                        />
                    )}
                </div>

                {/* Output Panel */}
                <iframe id="output" className={isExpanded ? "hidden" : ""}></iframe>
            </div>
        </div>
    );
}

export default Editor;
