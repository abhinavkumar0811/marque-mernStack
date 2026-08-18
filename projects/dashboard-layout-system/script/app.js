const sidebar = document.getElementById('sidebar');
const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');

openSidebar?.addEventListener('click', () => {
    sidebar?.classList.add('open');
});

closeSidebar?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!sidebar?.contains(event.target) && !openSidebar?.contains(event.target) && sidebar?.classList.contains('open')) {
        sidebar?.classList.remove('open');
    }
});
