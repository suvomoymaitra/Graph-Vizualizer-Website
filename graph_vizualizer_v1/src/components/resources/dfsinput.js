function handleSubmit () {
    const nodes_edges = document.getElementById('nodes_edges').value;
    const edges = document.getElementById('edges').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("nodes_edges", nodes_edges);
    sessionStorage.setItem("edges", edges);

    return;
}