<template>
    <div>
        <div style="margin-bottom: 10px">{{ title }}</div>
        <div v-for="(reply, index) in array" :key="index">
            <input name="checkTest" :type="type" :value="reply" @input="replyAns($event.target.value)">
            {{ reply }}
        </div>
        <button :disabled="this.disabled < 1" @click="sendData(info)" style="margin-top: 20px" class="btn btn-success">Send data</button>
    </div>
</template>

<script>

export default{
    props: ['title', 'array', 'type'],
    
    data(){

        return{
            info: 0,
            disabled: 0
        }
    },

    methods: {

         replyAns(data){
            this.info = data
            this.disabled++;
            // this.$set(this.info, index, data);
            },

        sendData(data){
            this.$emit('senddata', {
                value: data,
                valid: true
            });
        }
        
    }
  
}

</script>