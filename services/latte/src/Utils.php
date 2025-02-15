<?php declare(strict_types = 1);

namespace App;

final class Utils
{

	public static function isVercel(): bool
	{
		return !empty(getenv('NOW_REGION'));
	}

	public static function getTmp(): string
	{
		return self::isVercel() ? '/tmp' : __DIR__ . '/../tmp';
	}

}
