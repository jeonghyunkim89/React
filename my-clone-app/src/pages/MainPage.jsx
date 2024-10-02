import ContentsArea from "./ContentsArea";
import { useState, useEffect } from "react";

const MainPage = () => {

    const [contents, setContents] = useState([]);

    //처음 랜더링되었을 때 샘플 데이터를 contents에 저장
    useEffect (() => {
        const sample = [
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfcMlsuUukeGbyG2qygmBOj4sOAy2pojdTNj48Np2p2HkU23q5qlnQpAiASKlu9un1VmGrcxApLNG1Q8zdFoTWDOnrXJSYKjiQXycxy99iP5oYpJj4E300K8cOsN0cN1uhMxdyj4_BRos7soKZnyClxn9k8EsoNd4KjSjA2G5jGdx12VELeTC3HOhmUgi1mO4FHclC9YpxNJS-e80gL3238-m0NOsATjJVsq5iMZ58nUS75Ldv6xe8G3q92mYGRZK_O5fFrH8SthVvdNK6IdWEnocnNpV7sOkB2-20aK2o_5hsgi_mdoeQ_rVCHEhjxaEAIVI4HiQHUXiLDbHFhlKY0_odWyAwZyKaqqW-b80rYSSZ0HrA.webp?r=371', text: ''},
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVbqGzu0UstJuT1E8e6tCIL5C3FFlumVLhz89GHp2OzNC35jbbUQnxoykgcNWYaoQqEotTdlnpPkj1_u7msccyViUDzYWwHt7Ug.webp?r=c17', text: ''},
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVAHsCjlGt9_IJnsgUafa358smvUrO_qy1GybwlnFOULAvYauyBnfdGNVNddvEUZmXbFWi6YGAlZKf6MvecxX5sJU5Icw2s7vEY.webp?r=0f0', text: ''},
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSZFr9sEhILMLvmOBOeUKcvp2h_acqcfEVXdGgsCBA6pkVRWekkIf7wTdv4GC5-zFhvBgXuWS33ol9mb0ppMbpTsk4gcBsGincSNspTlDm5jJTi4eOr4Yw_ekcxjD7SmnQQ5.webp?r=542', text: ''},
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ8WXbzxBJuIIfxXpQ6NC0Vl4AeyIhvVedNyF8YFCilTuMZk3UX4SQRaps7jd3NmIwVoD4XXx3DdPWBN0WIfGdYuvm1k3hgGn60.webp?r=686', text: ''},
            {img: 'https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaPbVnk9QJacQGAVLxS5DLT3jMZ2gfU1s9J3jh2Z4fqXV2y2UKul3VDVuwHfrx7_oTCVOM33skYzC3tCvPKQYSDR-vPNlwHntebP2EoTQ_fiGl52qNTx2e7zjRz4UGcq92yBVCNoqJtypLB6IYf3sayBtleO2zr0mSywfw5gbbjYwEWmOBqILHTR46WGdWVLnEn_RxDIYsgfcDLaoOQu3CdnHzarWFd-TWt9M2WMoOuAwZHLbWVHbb1sUBkKI9rgu_PiGwqxIw1mDUXLudXEwrAbTLU.webp?r=252', text: ''},
            {img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcpGL9tWvBc7MBylTox0CTTzhf2YxCmMThSaAX7qhIMlb3KT0OFt95DnBAOyltTPdoz9-n13Jzhyk3fMoS-_TbTbx-sTtTgcZYZg-73cfVLktaAprlrbN01x-GvFe7czL8VgbE8sNkFNaRNvvpU6IvfTxWsmyJb8ajcOVZtGyUTkeeHmJeH1NhellmZaMy2PvwdCBF3WCf1y4uZkakxFrLljMSnAHSZguu8ygtRdnNFsQehQTFfPqJRfEmX1YV_kCV4jt__J6O_4grhEhLWAiDZcS7zxfKz4jX7jheWjf5kI9vBxmJHDkYqOpoEu0hRh41mP5CEqSUgNUxuxQWfFCxPBOiw0KlTUvxmWGVoluhOWgulxfcyaFZLzYYb8d5RFGiCDVDioxvh9BaxFc93gltZ1hYF8PLnvNuoL962N33OZZcrNLYbN-p_ococzzG99QvRDCA4kd_KULNMNcK1IcpAfxbDqi4FMqrzSUg.jpg?r=f3a', text: ''},
        ];
        
        setContents(sample);
    }, [])

    return(
        <div style={{width: '80%', margin: '0 auto'}}>

            <h3>인기콘텐츠</h3>
            <ContentsArea list={contents}/>

            <h3>지금 뜨는 콘텐츠</h3>
            <ContentsArea list={contents} />

        </div>
    )
}

export default MainPage;