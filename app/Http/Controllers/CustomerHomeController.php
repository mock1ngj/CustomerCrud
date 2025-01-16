<?php

namespace App\Http\Controllers;

use App\Models\CustomerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerHomeController extends Controller
{
    public function index(Request $request)
    {
        $customers = DB::table('customer')->paginate(5);
        return inertia('Home', ['customers' => $customers]);
    }
}
