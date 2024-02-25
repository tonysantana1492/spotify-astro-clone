<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    const getGreeting = (currentHour: number) => {
        if(currentHour < 12) return 'Good Morning';
        if(currentHour < 18) return 'Good Afternoon';

        return 'Good night';
    } 

    const greeting = getGreeting(currentHour);
</script>

<h1 class="text-3xl font-bold">
    {greeting}
</h1>