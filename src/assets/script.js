import control from '../components/controls'
import receiveddata from '../components/receiveddata'

export default{

    components:{
        'dv-control' : control,
        'dv-data' : receiveddata
    },

    data(){
        return{
            question: [
                {
                    type: 'radio',
                    title: 'Який тег задає силку?',
                    answers: [
                        'a',
                        'div',
                        'span',
                        'img'
                    ]
                },
                {
                    type: 'radio',
                    title: 'Які теги строчні?',
                    answers: [
                        'a',
                        'div',
                        'span',
                        'img'
                    ]
                }
            ],
            controls: [],
            currentlyComp: 0,
            showData: false
        }
    },

    mounted() {

        for(let i = 0; i < this.question.length; i++){
            this.controls.push({
                reply: '',
                valid: false
            })
        }

    },

    computed:{

        current(){
            return this.question[this.currentlyComp];
        },

        validData(){
            for(let i = 0; i < this.controls.length; i++){
               if(this.controls[1].valid == true){
                    return true;
               }
            }
        }

    },

    methods: {

        addReply(index, data){
            this.$set(this.controls, index, { reply: data.value, valid: data.valid});
            
            if(this.currentlyComp < 1){
                this.currentlyComp++;
            }

        }
       
    }
    
}