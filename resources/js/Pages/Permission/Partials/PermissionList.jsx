import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Pagination";

export default function PermissionList(props) {
    const datas = props.items

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">
                    Permission List
                </h1>
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("permissions.create")}
                    >
                        Create Permission
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
                            {datas.data.map((permission, index) => (
                                <tr key={index} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route(
                                                "permissions.edit",
                                                permission.id
                                            )}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {permission.id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={route(
                                                "permissions.edit",
                                                permission.id
                                            )}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {permission.name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href={route(
                                                "permissions.edit",
                                                permission.id
                                            )}
                                        >
                                            Edit
                                        </InertiaLink>
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 ml-2 text-sm text-white bg-red-500 rounded"
                                            href={route(
                                                "permissions.destroy",
                                                permission.id
                                            )}
                                        >
                                            Delete
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {datas.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No permission found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination class="mt-6" links={datas.links} />
                </div>
            </div>
        </div>
    );
}
