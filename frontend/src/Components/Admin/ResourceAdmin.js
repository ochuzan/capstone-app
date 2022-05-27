function ResourceAdmin({ resource }) {
    return (
        <div>
            <ul>
                <li>Resource ID: {resource.id}</li>
                <li>name: {resource.name}</li>
                <li>type: {resource.type}</li>
                <li>category: {resource.category}</li>
                <li>url: {resource.url}</li>
                <li>is favorite: {true ? <span>⭐️</span> : null} </li>
                <li>users ID: {resource.users_id}</li>
            </ul>
        </div>
    );
}
  
export default ResourceAdmin;