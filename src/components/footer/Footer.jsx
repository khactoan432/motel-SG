/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/images/footer/facebook.png";
import youtubeIcon from "../../assets/images/footer/youtube.png";
import zaloIcon from "../../assets/images/footer/zalo.png";
import "./footer.scss";

const Footer = memo((props) => {
      return (
            <footer className='background-primary text-white px-10 py-4 border-t-2 border-t-gray-300'>
                  {/* Inner container */}
                  <div className='flex lg:flex-row justify-around items-start'>
                        <section>
                              <span className='text-4xl font-semibold'>
                                    <Link to='/'>Motel-SG</Link>
                              </span>
                              <div class='image-footer'></div>
                        </section>
                        <section>
                              <h1 className='font-bold text-lg'>Về chúng tôi</h1>
                              <div className='text-[13px] font-normal'>
                                    <p className='hover:cursor-pointer'>Trang chủ</p>
                                    <p className='hover:cursor-pointer'>Giới thiệu</p>
                                    <p className='hover:cursor-pointer'>Liên hệ</p>
                                    <p className='hover:cursor-pointer'>Chính sách bảo mật</p>
                                    <p className='hover:cursor-pointer'>Quy định sử dụng</p>
                                    <p className='hover:cursor-pointer'>Quy chế hoạt động</p>
                              </div>
                        </section>
                        <section>
                              <h1 className='font-bold text-lg'>Hỗ trợ khách hàng</h1>
                              <div className='text-[13px] font-normal'>
                                    <p className='hover:cursor-pointer'>Câu hỏi thường gặp</p>
                                    <p className='hover:cursor-pointer'>Hướng dẫn đăng tin</p>
                                    <p className='hover:cursor-pointer'>Giải quyết khiếu nại</p>
                                    <p className='hover:cursor-pointer'>Quy định đăng bán</p>
                              </div>
                        </section>
                        <section>
                              <h1 className='font-bold text-lg'>Liên hệ với chúng tôi</h1>
                              <div className='flex justify-center items-center space-x-1 '>
                                    <div>
                                          <img src={facebookIcon} alt='facebook icon' className='w-8 h-8' />
                                    </div>
                                    <div>
                                          <img src={zaloIcon} alt='zalo icon' className='w-8 h-8' />
                                    </div>
                                    <div>
                                          <img src={youtubeIcon} alt='youtube icon' className='w-8 h-8' />
                                    </div>
                              </div>
                        </section>
                  </div>
            </footer>
      );
});

export default Footer;
