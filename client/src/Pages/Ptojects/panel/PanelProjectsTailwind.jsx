import {v1} from 'uuid'
import {useNavigate} from "react-router-dom"
import PanelElementsTailwindMax from "./PanelElementsTailwindMAX.jsx"
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthContext"
import {store} from "../../../state/state"

const PanelProjectsTailwind = () => {
    const {userId, logoName, allProjects, setAllProjects, idProject, setIdProject, arrNew, setArrNew} = useContext(AuthContext)
    const Navigator = useNavigate()
    // setAllProjects(b[0].projects)
    // console.log("arrNew: ", arrNew)
    // console.log("allProjects: ", allProjects)
    const onChangeHandle = (idCurrentProject) => {
        setIdProject(idCurrentProject)
        setAllProjects(allProjects.map(t => t.id === idCurrentProject ? {...t, check: true} : {...t, check: false}))
    }
    const onClickHome = () => {
        setIdProject(false)
        Navigator('/')
    }

    const radioProjects =
        <div
            className="flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-32 rounded-3xl p-3 mt-1">
            {
                allProjects.map((t, index) => {
                    return (
                        <div
                            className="w-48 text-sm font-medium text-gray-900 cursor-pointer h-6"
                            key={v1()}
                        >
                            <span
                                className={t.check === true ? "bg-amber-400" : ""}
                                onClick={e => onChangeHandle(t.id)}
                            >
                                {t.nameProject}
                            </span>
                        </div>
                    )
                })
            }
        </div>

    return (
        <>
            <div className="fixed right-0.5 top-1 flex flex-col items-center flex-wrap w-48">
                <div
                    className='cursor-pointer font-bold top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2'
                    onClick={onClickHome}
                >
                    HOME
                </div>
                {radioProjects}
                {idProject && <PanelElementsTailwindMax/>}
            </div>
        </>
    )
}

export default PanelProjectsTailwind;