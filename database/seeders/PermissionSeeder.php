<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $routeCollection = Route::getRoutes()->get();
        // dd($routeCollection);
        foreach ($routeCollection as $value) {
            $name = $value->action;
            if(!empty($name['as'])) {
                $permission = $name['as'];
                $str = trim(strtolower($permission));
                $newStr = preg_replace('/[\s.,-]+/', ' ', $str);
                $permissions[] = $newStr;
                Permission::create([
                    'name' => $newStr
                ]);
            }
        }
    }
}
