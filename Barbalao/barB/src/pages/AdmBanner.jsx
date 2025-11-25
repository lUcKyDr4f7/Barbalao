import styles from "../Components/Css/styles.AdmBanner.module.css"

export default function AdmBanner({ banners }) {
    const bannerList = banners || JSON.parse(localStorage.getItem("banners")) || [];

    return (
        <div className={`${styles.bannerContainer}`}>
            {bannerList.length > 0 ? (
                bannerList.map(banner => (
                    <div key={banner.id_banner} className={styles.bannerCard}>
                        <img 
                            src={banner.imagem} 
                            alt={banner.titulo}
                            className={styles.bannerImage}
                        />
                        <div className={styles.bannerInfo}>
                            <h2 className={styles.bannerTitle}>{banner.titulo}</h2>
                            {banner.sub_titulo && (
                                <p className={styles.bannerSubtitle}>{banner.sub_titulo}</p>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.noBanners}>Nenhum banner cadastrado</p>
            )}
        </div>
    );
}