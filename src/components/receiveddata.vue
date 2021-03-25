<template>
    <div>
        <table class="table table-bordered">
            <tr> Відповідь:
                <td v-for="(item, index) in data" :key="index">{{ item.reply }}</td>
            </tr>
        </table>    
    </div>
</template>

<script>

export default{
    props: ['data']
}

</script>