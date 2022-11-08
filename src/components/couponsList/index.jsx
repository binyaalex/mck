import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import { getCoupons } from '../../redux/actions-exporter'
import Coupon from './_components/_coupon'

const CouponsList = ({couponsSlidesPerView}) => {
    const dispatch = useDispatch()
    const coupons = useSelector(state => state.coupon.coupons)
    const couponsArr = [
        {
            title: "הטבת השבוע",
            discountValue: 40,
            discountType: 'percent',
            subTitle: "בפאפא ג'ונס",
        },
        {
            title: "הטבת השבוע",
            discountValue: 40,
            discountType: 'percent',
            subTitle: "בפאפא ג'ונס",
        },
        {
            title: "הטבת השבוע",
            discountValue: 40,
            discountType: 'percent',
            subTitle: "בפאפא ג'ונס",
        },
    ]
    const couponsPending = useSelector(state => state.coupon.isCouponsPending)
    const { t } = useTranslation();
    // console.log(slidesPerView);
    useEffect(() => {
        dispatch(getCoupons())
    }, [dispatch])

    if (couponsPending) return <CircularProgress style={{ display: 'block', margin: '20px auto' }} />

    return (
        <div className='caseback-center'>
            <Swiper
                freeMode={true}
                slidesPerView={couponsSlidesPerView}
                style={{ width: "auto" }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[ Autoplay, Pagination ]}
                // breakpoints={{
                //     // when window width is >= 600px
                //     600: {
                //         slidesPerView: 2,
                //     },
                //     // when window width is >= 900px
                //     900: {
                //         slidesPerView: 3,
                //     },
                // }}
                // slidesPerView={"auto"}
                spaceBetween={10}
            // style={{ direction: "ltr" }}
            >
                {couponsArr
                    .map((coupon, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                style={{ width: "auto" }}
                            >
                                <Coupon
                                    title={t(coupon.title)}
                                    subTitle={coupon.subTitle}
                                    discountValue={coupon.discountValue}
                                    discountType={coupon.discountType}
                                // key={coupon.id}x
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>

    )
}

export default CouponsList