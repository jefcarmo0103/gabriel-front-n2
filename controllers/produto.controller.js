angular
    .module('estoque', []);

angular
    .module('estoque')
    .controller('produtoController', Controller);

function Controller($window, ProdutoService) {
    var vm = this;
    vm.message = "teste";
    vm.products = [];
    vm.saveProduct = saveProduct;
    vm.deleteProduct = deleteProduct;

    vm.initNewProduct = initNewProduct;

    vm.fillProduct = fillProduct;
    vm.productSelected = {};

    vm.setProductEdit = setProductEdit;

    initProducts();

    function initProducts() {
        //get all products in the API
        ProdutoService.GetAll().then(function (data) {
            vm.products = data;
            setTimeout(setColorInIndex, 500);
        });
    }

    function initNewProduct(){
        vm.product = null;
    }

    function saveProduct() {
        console.log(vm.product._id != null);
        if(vm.product._id != null){
            ProdutoService.Update(vm.product)
                .then(function () {
                    $window.alert("Produto Alterado");
                    vm.product = null;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else{
            ProdutoService.Create(vm.product)
                .then(function () {
                    $window.alert("Produto Criado");
                    vm.product = null;
                    hideSecond();
                    closeDialog();
                    initProducts();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    function deleteProduct() {
        if(confirm("Tem certeza que deseja excluir esse registro ?")){
            ProdutoService.Delete(vm.productSelected._id)
            .then(function () {
                $window.alert("Produto Excluido");
                vm.product = null;
                hideSecond();
                initProducts();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }

    function fillProduct(product){
        vm.productSelected = product;
    }

    function setProductEdit(productCurrent){
        vm.product = productCurrent;
    }
}