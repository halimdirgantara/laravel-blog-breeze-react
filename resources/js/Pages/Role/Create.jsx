import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia, Head, usePage, Link, useForm,  InertiaLink} from "@inertiajs/inertia-react";
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('roles.store'));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create role
                </h2>
            }
        >
            <Head title="Roles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-400"
                                    href={route("roles.index")}
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={submit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Name</label>

                                        <TextInput
                                            type="text"
                                            className="mt-1 block lg:w-1/3 md:w-full sm:w-full "
                                            autoComplete="name"
                                            isFocused={true}
                                            name="name"
                                            value={data.name}
                                            required
                                            handleChange={onHandleChange}
                                        />

                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 text-white bg-green-600 rounded-md focus:outline-none hover:bg-green-400"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
