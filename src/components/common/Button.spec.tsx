import {render, screen} from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe("Button 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        //1. 렌더링 실행
        render(
            <BookStoreThemeProvider>
                <Button size='large' scheme='primary'>버튼 테스트</Button>
            </BookStoreThemeProvider>
        );
        //2. 확인
        expect(screen.getByText("버튼 테스트")).toBeInTheDocument();
    });

    it('size props 적용', () => {
        const {container} = render(
            <BookStoreThemeProvider>
                <Button size='large' scheme='primary'>버튼 테스트</Button>
            </BookStoreThemeProvider>
        );

        expect(screen.getByRole("button")).toHaveStyle({fontSize: "1.5rem"});
    });
});