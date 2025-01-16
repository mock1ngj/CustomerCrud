<?php

namespace App\Http\Controllers;

use App\Models\CustomerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerHomeController extends Controller
{
    //paginate data in the database
    public function index()
    {
        $customers = DB::table('customer')->paginate(5);
        return inertia('Home', ['customers' => $customers]);
    }
}
