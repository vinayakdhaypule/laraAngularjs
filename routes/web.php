<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/api/v1/employees/{id?}', 'Employees@index');
Route::get('/api/v1/employees/show/{id}', 'Employees@show');
Route::post('/api/v1/employees', 'Employees@store');
Route::post('/api/v1/employees/update/{id}', 'Employees@update');
Route::delete('/api/v1/employees/{id}', 'Employees@destroy');
