export const notify = (type, text, id='liveToast') => {
    return (
        `<div class="position-fixed bottom-0 end-0 p-3 " style="z-index: 11">
            <div id=${id} class="toast text-white bg-${type}" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                    ${text}
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>`
    );
};