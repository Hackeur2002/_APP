import React from 'react';

function pdfViewer(props) {
    const pdfUrl = '/src/pdf/Guide_des_fondateurs_pour_la_levee_de_fonds_au_Benin.pdf';
    return (
        <div>
            <iframe title="PDF Viewer" src={`https://docs.google.com/gview?url=${window.location.origin + pdfUrl}&embedded=true`} style={{ width: '100%', height: '500px', border: 'none' }}></iframe>
        </div>
    );
}

export default pdfViewer;