import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

function Git() {
  const {darkTheme} = useContext(ThemeContext)
   return (
    <svg width="64" height="27" viewBox="0 0 64 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_52_83)">
<path d="M38.2459 9.30371C36.8466 9.30371 35.8046 9.99071 35.8046 11.6442C35.8046 12.89 36.4914 13.755 38.1704 13.755C39.5936 13.755 40.5604 12.9162 40.5604 11.5925C40.5604 10.0925 39.6954 9.30371 38.2459 9.30371ZM35.4484 20.979C35.1171 21.3852 34.7871 21.8172 34.7871 22.3265C34.7871 23.3432 36.0836 23.6492 37.8646 23.6492C39.3396 23.6492 41.3491 23.5457 41.3491 22.1742C41.3491 21.359 40.3824 21.3087 39.1609 21.2322L35.4484 20.979ZM42.9766 9.38046C43.4336 9.96546 43.9176 10.7797 43.9176 11.9495C43.9176 14.7725 41.7049 16.4255 38.5009 16.4255C37.6861 16.4255 36.9486 16.324 36.4914 16.197L35.6516 17.5445L38.1439 17.697C42.5444 17.9775 45.1376 18.105 45.1376 21.4862C45.1376 24.4117 42.5696 26.064 38.1439 26.064C33.5406 26.064 31.7856 24.894 31.7856 22.885C31.7856 21.7405 32.2944 21.1312 33.1846 20.2905C32.3451 19.9357 32.0656 19.3002 32.0656 18.613C32.0656 18.053 32.3451 17.5447 32.8036 17.061C33.2611 16.5785 33.7696 16.0947 34.3801 15.5352C33.1341 14.9247 32.1926 13.6022 32.1926 11.7197C32.1926 8.79546 34.1259 6.78696 38.0164 6.78696C39.1104 6.78696 39.7719 6.88746 40.3569 7.04121H45.3169V9.20221L42.9766 9.38046ZM49.7914 4.75871C48.3414 4.75871 47.5021 3.91871 47.5021 2.46846C47.5021 1.02021 48.3411 0.230957 49.7914 0.230957C51.2664 0.230957 52.1059 1.02021 52.1059 2.46846C52.1059 3.91871 51.2666 4.75871 49.7914 4.75871ZM46.5099 20.043V18.0347L47.8074 17.8572C48.1636 17.806 48.2141 17.73 48.2141 17.3477V9.87021C48.2141 9.59121 48.1381 9.41221 47.8829 9.33671L46.5099 8.85296L46.7894 6.79346H52.0546V17.3477C52.0546 17.7552 52.0791 17.806 52.4619 17.8575L53.7589 18.035V20.043H46.5099ZM63.8166 19.057C62.7226 19.5907 61.1204 20.074 59.6701 20.074C56.6436 20.074 55.4996 18.8545 55.4996 15.979V9.31621C55.4996 9.16371 55.4996 9.06196 55.2954 9.06196H53.5154V6.79771C55.7541 6.54271 56.6436 5.42371 56.9234 2.65146H59.3399V6.26396C59.3399 6.44146 59.3399 6.51821 59.5436 6.51821H63.1294V9.06146H59.3399V15.1397C59.3399 16.6402 59.6964 17.2247 61.0691 17.2247C61.7821 17.2247 62.5189 17.0472 63.1291 16.8182L63.8166 19.057Z" fill={darkTheme ? "white" : "black"}/>
<path d="M26.1321 12.3827L14.5031 0.754452C14.3438 0.595143 14.1547 0.46877 13.9466 0.38255C13.7385 0.29633 13.5154 0.251953 13.2902 0.251953C13.0649 0.251953 12.8419 0.29633 12.6338 0.38255C12.4257 0.46877 12.2366 0.595143 12.0773 0.754452L9.66256 3.16945L12.7258 6.23245C13.0859 6.11015 13.473 6.09105 13.8434 6.17734C14.2138 6.26363 14.5526 6.45185 14.8216 6.7207C15.0918 6.99143 15.2805 7.33268 15.3661 7.70551C15.4517 8.07834 15.4307 8.46772 15.3056 8.8292L18.2573 11.7815C18.9716 11.5355 19.7958 11.6947 20.3661 12.266C20.5557 12.4554 20.7061 12.6804 20.8087 12.928C20.9114 13.1756 20.9642 13.441 20.9642 13.7091C20.9642 13.9771 20.9114 14.2425 20.8087 14.4902C20.7061 14.7378 20.5557 14.9627 20.3661 15.1522C20.0325 15.4861 19.5935 15.694 19.1239 15.7407C18.6543 15.7873 18.183 15.6698 17.7903 15.408C17.3976 15.1463 17.1077 14.7566 16.97 14.3052C16.8323 13.8537 16.8553 13.3686 17.0351 12.9322L14.2821 10.1792L14.2818 17.4242C14.4813 17.5231 14.6635 17.6534 14.8216 17.8102C15.0111 17.9997 15.1615 18.2248 15.2641 18.4724C15.3667 18.7201 15.4195 18.9855 15.4195 19.2536C15.4195 19.5216 15.3667 19.7871 15.2641 20.0347C15.1615 20.2824 15.0111 20.5074 14.8216 20.697C14.0241 21.4945 12.7316 21.4945 11.9353 20.697C11.6974 20.4592 11.522 20.1664 11.4245 19.8446C11.3271 19.5227 11.3107 19.1818 11.3768 18.852C11.4429 18.5223 11.5895 18.214 11.8034 17.9546C12.0174 17.6951 12.2922 17.4926 12.6033 17.365V10.0525C12.3531 9.95003 12.126 9.79855 11.9353 9.60695C11.3313 9.0037 11.1861 8.11745 11.4956 7.3757L8.47606 4.3557L0.502563 12.3287C0.343231 12.488 0.216842 12.6772 0.130612 12.8853C0.0443821 13.0935 0 13.3166 0 13.542C0 13.7673 0.0443821 13.9904 0.130612 14.1986C0.216842 14.4067 0.343231 14.5959 0.502563 14.7552L12.1316 26.3837C12.2908 26.543 12.4799 26.6694 12.688 26.7556C12.8961 26.8418 13.1192 26.8862 13.3444 26.8862C13.5697 26.8862 13.7928 26.8418 14.0009 26.7556C14.209 26.6694 14.3981 26.543 14.5573 26.3837L26.1321 14.8095C26.4537 14.4876 26.6344 14.0511 26.6344 13.5961C26.6344 13.141 26.4537 12.7046 26.1321 12.3827Z" fill={darkTheme ? "white" : "black"}/>
</g>
<defs>
<clipPath id="clip0_52_83">
<rect width="64" height="27" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}

export default Git