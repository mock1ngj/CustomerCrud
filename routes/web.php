<?php

use App\Http\Controllers\CustomerCrudController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CustomerCrudController::class, 'index']);
require __DIR__.'/auth.php';
