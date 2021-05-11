<template>
  <div class="search-input">
    <input
      id="search"
      class="search-input__inner"
      type="text"
      name="search"
      :placeholder="$t('label.search_placeholder')"
      autocomplete="off"
    />
    <div class="search-input__btn">
      <img src="@/assets/images/search.png" alt="search-btn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  width: 268px;
  height: 32px;
  padding: 9px 12px 9px 14px;
  box-sizing: border-box;
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  background: var(--color-input);
  &__inner {
    width: 100%;
    padding: 0;
    color: var(--color-input-text);
    font-size: 12px;
    border: none;
    background: none;
    outline: none;
    &::placeholder {
      color: var(--color-input-text);
    }
  }

  &__btn {
    width: 30px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
}
</style>
