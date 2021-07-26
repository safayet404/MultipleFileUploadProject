@extends('Layout.app')


@section('title','Laravel Axios Multiple File Uploader')


@section('content')


    <div class="container-fluid">

        <div class="row">
            <div class="col">

                <div class="card">
                    <div class="card-header">

                        <h4>Laravel Axios Card Header</h4>
                    </div>

                    <div class="card-body">

                        <button class="btn addBtn btn-primary my-3 btn-sm">Add File</button>

                        <table class="table table-striped">

                            <thead>

                            <tr>
                                <th>File</th>
                                <th>File Size</th>
                                <th>Cancel</th>
                                <th>Upload</th>
                                <th>Upload(MB)</th>
                                <th>Upload(%)</th>
                                <th>Status</th>
                            </tr>

                            </thead>


                            <tbody class="fileList">


                            </tbody>


                        </table>


                    </div>

                </div>

            </div>

        </div>

    </div>

@endsection
