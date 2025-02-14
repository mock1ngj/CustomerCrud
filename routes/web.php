<?php

use App\Http\Controllers\AddCustomerController;
use App\Http\Controllers\CustomerHomeController;
use App\Http\Controllers\ViewCustomerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(CustomerHomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::post('/delete', 'delete');
});

Route::controller(AddCustomerController::class)->group(function(){
    Route::get('/add', 'index');
    Route::post('/add', 'insert');
});

Route::controller(ViewCustomerController::class)->group(function(){
    Route::get('/view/{id}', 'index');
    Route::post('/edit', 'update');
});
require __DIR__.'/auth.php';
