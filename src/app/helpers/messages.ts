import Swal from "sweetalert2";

export const showLoadingMessage = (title:String) => {
    Swal.fire({
        title: title,
        
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });
};

export const showMessage = (title:string, text:string, severity:any) => {
    Swal.fire({
        title: title,
        text: text,
        icon: severity,
        confirmButtonColor: '#ce0f69',
        confirmButtonText: '<i class="fas fa-check-circle"></i> Aceptar',
    });
};

export const showMessageWithRedirect = (title:string, text:string, severity:any, hrefRedirect:string, addClass:string) => {
    Swal.fire({
        title: title,
        text: text,
        icon: severity,
        confirmButtonColor: '#ce0f69',
        confirmButtonText: `<a className="text-white ${addClass}" href=${hrefRedirect}><span class="text-white">Aceptar</span></a>`,
    });
};