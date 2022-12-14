import React, {useEffect} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Pagination";
import toast, { Toaster } from 'react-hot-toast';


export default function Index(props) {
    const { roles } = usePage().props;
    const {flash} = usePage().props
    console.log(flash.success)
    useEffect(() => {
        if (flash.success !== null) {
            toast.success(flash.success)
        }
        if (flash.error !== null) {
            toast.error(flash.error)
        }
    }, [])

    function destroy(e) {
        if (confirm("Are you sure you want to delete this role?")) {
            Inertia.delete(route("roles.destroy", e.currentTarget.id));
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Roles
                </h2>
            }
        >
            <div><Toaster /></div>
            <Head title="Roles" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="mt-8 mb-8 text-3xl font-bold text-center">
                            Role List
                        </h1>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <InertiaLink
                                    className="px-6 py-2 text-white bg-green-600 rounded-md focus:outline-none hover:bg-green-400"
                                    href={route("roles.create")}
                                >
                                    Create Role
                                </InertiaLink>
                            </div>

                            <div className="overflow-x-auto bg-white rounded shadow">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="text-white bg-gray-600">
                                        <tr className="font-bold text-left">
                                            <th className="px-6 pt-5 pb-4">#</th>
                                            <th className="px-6 pt-5 pb-4">Title</th>
                                            <th className="px-6 pt-5 pb-4">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {roles.data.map((role, index) => (
                                            <tr key={index} className="">
                                                <td className="border-t">
                                                    <InertiaLink
                                                        href={route(
                                                            "roles.edit",
                                                            role.id
                                                        )}
                                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                    >
                                                        {role.id}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        href={route(
                                                            "roles.edit",
                                                            role.id
                                                        )}
                                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                    >
                                                        {role.name}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route(
                                                            "roles.edit",
                                                            role.id
                                                        )}
                                                    >
                                                        Edit
                                                    </InertiaLink>
                                                    <InertiaLink
                                                        tabIndex="1"
                                                        className="px-4 py-2 ml-2 text-sm text-white bg-red-500 rounded"
                                                        href={route(
                                                            "roles.destroy",
                                                            role.id
                                                        )}
                                                    >
                                                        Delete
                                                    </InertiaLink>
                                                </td>
                                            </tr>
                                        ))}

                                        {roles.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    No roles found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                <Pagination class="mt-6" links={roles.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
