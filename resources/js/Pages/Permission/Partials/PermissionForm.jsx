import React, { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';

export default function PermissionForm() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('permissions.store'));
    };

    return (
        <form onSubmit={submit}>
            <div>
                <InputLabel forInput="name" value="Name" />

                <TextInput
                    name="name"
                    value={data.name}
                    className="mt-1 block w-1/3"
                    autoComplete="name"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
                <div className="flex items-center justify-start mt-4">
                    <PrimaryButton className="" processing={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
}
