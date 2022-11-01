import { Button, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Hero.css";
import { theme } from "./style";

function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container" id="home">
        <Box className="center" align="center">
          <Typography variant="h2">Bơ Bánh Lọc</Typography>
          <br />
          <Typography variant="body1">
            Vị Huế là nhà hàng tại Kent, Washington. Chuyên sản xuất và cung cấp
            tất cả các loại bánh và những món đặc biệt khác trên toàn nước tiểu
            bang WA. Bảo đảm 100% không HÀN THE, không CHẤT BẢO QUẢN, không TRỘN
            BỘT cùng với những Tiêu Chí: NGON - AN TOÀN - TIỆN LỢI. Có chứng
            nhận an toàn thực phẩm của TIỂU BANG WASHINGTON.
          </Typography>
          <br />
          <Button sx={{ textTransform: "none" }}>Order Here</Button>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Hero;
