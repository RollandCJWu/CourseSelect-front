# Vue 專案
本專案採用 Vue3 設計

## 專案架構
```
.env
.gitignore
.vscode/
    extensions.json
    settings.json
index.html
jsconfig.json
package.json
public/
README.md
src/
    api/
    App.vue
    assets/
        base.css
        images/
        main.css
    components/
        UserModal.vue
    main.js
    plugins/
        axios.js
    router/
        router.js
    store/
        users.js
    views/
        admin/
            Admin.vue
        Forbidden.vue
        Home.vue
        lecture/
            SelectLecture.vue
        Navigationbar.vue
        NotFound.vue
        secure/
            Login.vue
        user/
            User.vue
vite.config.js
```

## 使用說明
使用者認證
本應用程式支援使用者認證功能。使用者可以以教師或學生身份登入。登入表單位於 Login.vue 中。

## 使用者管理
應用程式包含一個使用者管理系統。使用者可以在 UserModal.vue 中檢視和編輯其個人資訊。

## 導覽功能
導覽列實作於 Navigationbar.vue 中，包含前往首頁、登入頁面、使用者頁面，以及（若使用者為管理員）管理員頁面的連結。

## 狀態管理
應用程式使用 Pinia 進行狀態管理。使用者存儲（store）定義於 users.js 中。

## 路由設定
應用程式使用 Vue Router 進行客戶端路由設定，路由資訊定義於 router.js 中。

## 樣式設計
專案使用 Bootstrap 進行樣式設計，並在 base.css 和 main.css 中定義了自訂樣式。

## Axios 設定
應用程式使用 Axios 發送 HTTP 請求，Axios 的實例設定位於 axios.js 中。
