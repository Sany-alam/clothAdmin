<table id="data-table" class="table table-hover e-commerce-table">
    <thead>
        <tr>
            <th>#Id</th>
            <th>Images</th>
            <th>Name</th>
            <th>Category</th>
            <th>Size</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Fabric</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Edit</th>
            <th>Manage images</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        <div class="avatar avatar-image avatar-square"><img src="" alt="image" /></div>
    <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="product-stock'.$i.'" checked>
              <label onclick="stock()" class="custom-control-label" for="product-stock'.$i.'"></label>
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="product-stock'.$i.'">
              <label onclick="stock()" class="custom-control-label" for="product-stock'.$i.'"></label>
            </div>
            <tr>
            <td>1</td>
            <td>hg</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>

            </td>
            <td class="">
                <button onclick="edit_product()" class="btn btn-icon btn-hover btn-sm btn-rounded">
                    <i class="anticon anticon-edit"></i>
                </button>
            </td>
            <td class="">
                <button onclick="edit_product_image()" class="btn btn-icon btn-hover btn-sm btn-rounded">
                    <i class="anticon anticon-picture"></i>
                </button>
            </td>
            <td class="">
                <button onclick="delete_product()" class="btn btn-icon btn-hover btn-sm btn-rounded">
                    <i class="anticon anticon-delete"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
