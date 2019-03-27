<template>
    <div class="loinin">
        <Backs :name="Names" />
        <div class="container">
            <div class="mask"></div>

            <div class="title">
                勇士，<br /> 我们还会再相遇吗？
            </div>

            <div class="forms">
                <div class="inputForm">
                    <input type="text" placeholder="勇士姓名">
                </div>

                <div class="inputForm">
                    <input type="text" placeholder="看不见的符文">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Backs from '../tips/backs.vue'

    export default {
        name: 'Loinin',
        components: {
            Backs
        },
        data () {
            return {
                Names: '注册'
            }
        }    
    }
</script>

<style scoped lang="less">
    .loinin{
        width: 100%;
        height: 100%;
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;

        .container {
            .mask{
                background-color: rgba(215,239,191, 0.7)
            }

            .title{
                width: 100%;
                height: 6rem;
                margin-top: 3rem;
                line-height: 2rem;
                font-family: font2;
                font-size: 1rem;

            }

            .inputForm{
                width: 100%;
                margin: 0.5rem 0;

                input{
                    width: 80%;
                    line-height: 1.2rem;
                    height: 1.2rem;
                    font-size: 0.4rem;
                    padding: 0 5px;
                }
            }  
        }

        

    }
</style>