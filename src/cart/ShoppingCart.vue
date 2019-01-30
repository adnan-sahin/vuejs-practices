<template>
    <div>
        <h1>Cart</h1>
        <table>
            <thead>
                <tr>
                    <th class="robot-title">Robot</th>
                    <th class="cost">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot,index) in cart" :key="index">
                    <td class="robot-title">
                        {{robot.head.title}}
                    </td>
                    <td>
                        {{robot.cost}}
                    </td>
                </tr>
            </tbody>
        </table>
             <h2 class="sale-items">You saved money on these robots:</h2>
        <table>
            <thead>
                <tr>
                    <th class="robot-title">Robot</th>
                    <th class="cost">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot,index) in cartSaleItems" :key="index">
                    <td class="robot-title">
                        {{robot.head.title}}
                    </td>
                    <td>
                        {{robot.cost}}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartSaleItems() {
      return this.$store.getters.cartSaleItems;
    },
  },
};
</script>
<style scoped>
    td ,th{
        padding: 5px;
    }
    .robot-title{
        text-align:left;
        padding-right: 200px;
    }
    .cost{
        text-align: right;
    }
    .sale-items{
        margin-top: 50px;
        color:red;
        font-size: 18px;
    }
</style>
