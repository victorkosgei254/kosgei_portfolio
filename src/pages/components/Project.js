function ProjectView({order})
{
    return(order % 2 === 0 ?
        <>
            <div className="project-view__description">
                <p>Project Description</p>
                <p>Another one and another</p>
            </div>
            <div className="project-view__line">
                <div className="project-view__line project-view__dot"/>
            </div>
            <div className="project-view__image">
                <h2>Project View Image</h2>
            </div>
        </>
        :
        <>
            <div className="project-view__image">
                <h2>Project View Image</h2>
            </div>
            <div className="project-view__line">
                <div className="project-view__line project-view__dot"/>
            </div>
            <div className="project-view__description">
                <p>Project Description</p>
            </div>

        </>
    )
}

export default ProjectView;
