<template>
    <div class="setting">
        <Backs :title="backTit" />
    </div>
</template>

<script>
    import getJSONP from '../../utils/getJsonp';
    import Backs from "../tips/backs.vue";
    export default {
        name: 'settting',
        components: {
            Backs
        },
        data () {
            return {
                backTit: '设置',
                Tel: 13300210000,
                Pwd: 32070707,
                key: 0
            }
        },
        methods: {
            
        },
        created () {
            let data = {
                Tel: this.Tel,
                Pwd: this.Pwd,
                key: 0
            };

            getJSONP('http://www.gongchengku.com/App/Service/GckService.asmx/LoginForWeb', data).then(d => {
                this.$store.commit('userCheck', d.respResult[0].ID);
            }).catch(error => {
                console.log(error);
            })

            
        }
    }
</script>

<style scoped lang="less">
    .setting{
        width: 100%;
    }
</style>