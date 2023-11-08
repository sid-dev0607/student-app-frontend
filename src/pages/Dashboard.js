import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applicationList, createApplication, createAppliction } from "../services/studentService";


const Dashboard = () => {
    const navigate = useNavigate();

    const [studentName, setStudentName] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [universityCourse, setUniversitycourse] = useState("");
    const [applicationLst, setApplicationList] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        applicationList(token).then((res)=>{
            console.log(res);
            setApplicationList(res.data);
        }).catch(e=>console.log(e))
    },[])

    const application = {
        studentName: studentName,
        universityName: universityName,
        universityCourse: universityCourse
    };
    const creatApplication = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        createApplication(application,token)
            .then((res) => {
                applicationList(token).then((res)=>{
                    console.log(res);
                    setApplicationList(res.data);
                }).catch(e=>console.log(e))
            })
            .catch((error) => {
                alert("Please Enter Correct Information");
                console.log(error);
            });
            setStudentName("")
            setUniversityName("")
            setUniversitycourse("")
    };
    return (
        <>
            <div className="flex flex-col items-center">
                <form className="w-80" onSubmit={(e) => creatApplication(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="sname"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Student name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="sname"
                                            id="sname"
                                            value={studentName}
                                            onChange={(e) =>
                                                setStudentName(e.target.value)
                                            }
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="universityname"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        University name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="universityname"
                                            id="universityname"
                                            value={universityName}
                                            onChange={(e) =>
                                                setUniversityName(
                                                    e.target.value
                                                )
                                            }
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="universitycource"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        University cource
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="universitycource"
                                            name="universitycource"
                                            type="text"
                                            autoComplete="universitycource"
                                            value={universityCourse}
                                            onChange={(e) =>
                                                setUniversitycourse(
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center  gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create application
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex justify-center">
                <table class="m-10  text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                University name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                University cource
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicationLst?.map((application,index)=>{
                            return(
                                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{application.studentName}</th>
                                    <td class="px-6 py-4">{application.universityName}</td>
                                    <td class="px-6 py-4">{application.universityCourse}</td>
                                </tr>
                            )
                        })}
                        {/* {applicationLst[0]?.studentName} */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Dashboard;
